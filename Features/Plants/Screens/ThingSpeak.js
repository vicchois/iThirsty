import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit';
import { format } from 'date-fns';
import { Notifications } from 'expo';
import styles from '../PlantsStyles';

function ThingSpeakExample({ onLastTempChange, onLastHumidChange, onLastWaterChange }) {
  const [data, setData] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = process.env.EXPO_PUBLIC_API_URL;

      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error('Error: ', error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 3000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    if (data && data.feeds && data.feeds.length > 0) {
      const lastIndex = data.feeds.length - 1;
      const lastTemp = parseFloat(data.feeds[lastIndex].field1).toFixed(1);
      const lastHumid = parseFloat(data.feeds[lastIndex].field2);
      const lastWater = parseFloat(data.feeds[lastIndex].field3);

      onLastTempChange(lastTemp);
      onLastHumidChange(lastHumid);
      onLastWaterChange(lastWater);
    }
  }, [data, onLastTempChange, onLastHumidChange, onLastWaterChange]);

  const prepareChartData = () => {
    if (!data || data.feeds.length == 0) return { labels: [], datasets: [{ data: [0] }, { data: [0] }, { data: [0] }] };

    const endIndex = startIndex + 3;
    const slicedData = data.feeds.slice(startIndex, endIndex);

    const labels = slicedData.map((feed) => {
      const timestamp = new Date(feed.created_at);
      return format(timestamp, 'MM/dd HH:mm:ss');
    });

    const datasets = [
      { data: data.feeds.map((feed) => parseFloat(feed.field1)) },
      { data: data.feeds.map((feed) => parseFloat(feed.field2)) },
      { data: data.feeds.map((feed) => parseFloat(feed.field3)) },
    ];

    return { labels, datasets };
  };

  const chartData = prepareChartData();

  return (
    <View style={styles.chartContainerStyles}>
      {data && (
        <View style={styles.dataContainer}>
          <View style={styles.chart}>
            <Text style={styles.text}> Temperature</Text>
            <LineChart
              data={{ labels: chartData.labels, datasets: [chartData.datasets[0]] }}
              width={350}
              height={200}
              yAxisSuffix=""
              yAxisInterval={1}
              chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                color: (opacity = 1) => `rgba(135, 163, 75, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: { borderRadius: 16 },
              }}
            />
          </View>
          <View style={styles.chart}>
            <Text style={styles.text}>Humidity</Text>
            <LineChart
              data={{ labels: chartData.labels, datasets: [chartData.datasets[1]] }}
              width={350}
              height={200}
              yAxisSuffix=""
              yAxisInterval={1}
              chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                color: (opacity = 1) => `rgba(154, 198, 126, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: { borderRadius: 16 },
              }}
            />
          </View>
          <View style={styles.chart}>

            <Text style={styles.text}>Water Level</Text>
            <LineChart
              data={{ labels: chartData.labels, datasets: [chartData.datasets[2]] }}
              width={350}
              height={200}
              yAxisSuffix=""
              yAxisInterval={1}
              chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                color: (opacity = 1) => `rgba(56, 97, 17, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: { borderRadius: 16 },
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
}
export default ThingSpeakExample;
