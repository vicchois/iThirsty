import { Text, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../ExploreStyles';

export default function PlantInfo({ name, data, picture }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={picture} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

PlantInfo.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.number).isRequired,
      }),
    ).isRequired,
  }).isRequired,
  picture: PropTypes.number.isRequired,
};

// { selectedPlant && (
// <View style={styles.information}>
//   <ImageBackground source={selectedPlant.picture} style={styles.image} />
//   <BarChart
//     data={selectedPlant.data}
//     width={400}
//     height={400}
//     chartConfig={chartConfig}
//     styles={{ margin: 100 }}
//   />
// </View>
// ); }

// const handlePlantSelection = (itemValue) => {
//   const selectedPlantInfo = PLANT_INFO.find((plant) => plant.id.toString() === itemValue);
//   setSelectedPlant(selectedPlantInfo);
// };

// const chartConfig = {
//   backgroundGradientFrom: '#fff',
//   backgroundGradientTo: '#fff',
//   color: (opacity = 2) => `rgba(0,0,0, ${opacity})`,
//   strokeWidth: 2,
//   yAxisInterval: 20,
// };
