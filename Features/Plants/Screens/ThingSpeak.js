import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit';
import { format } from 'date-fns';

function ThingSpeakExample() {
  const [data, setData] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;

    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data from ThingSpeak:', error);
      });
  }, []);

  const prepareChartData = () => {
    if (!data) return { labels: [], datasets: [{ data: [] }, { data: [] }, { data: [] }] };

    const endIndex = startIndex + 5;
    const slicedData = data.feeds.slice(startIndex, endIndex);

    const labels = slicedData.map((feed) => {
      const timestamp = new Date(feed.created_at);
      return format(timestamp, 'MM/dd HH:mm'); // Adjust the format as needed
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
    <View>
      <Text>Temperature in Celsuis:</Text>
      {data && (
        <View>
          <LineChart
            data={{ labels: chartData.labels, datasets: [chartData.datasets[0]] }}
            width={300}
            height={200}
            yAxisSuffix=""
            yAxisInterval={1}
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: { borderRadius: 16 },
            }}
          />
          <Text>Moisture Level Percentage:</Text>

          <LineChart
            data={{ labels: chartData.labels, datasets: [chartData.datasets[1]] }}
            width={300}
            height={200}
            yAxisSuffix=""
            yAxisInterval={1}
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: { borderRadius: 16 },
            }}
          />
          <Text>Water Level (cm):</Text>

          <LineChart
            data={{ labels: chartData.labels, datasets: [chartData.datasets[2]] }}
            width={300}
            height={200}
            yAxisSuffix=""
            yAxisInterval={1}
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: { borderRadius: 16 },
            }}
          />
        </View>
      )}
    </View>
  );
}
export default ThingSpeakExample;
