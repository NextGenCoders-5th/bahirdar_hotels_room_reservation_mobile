import { MaterialIcons } from '@expo/vector-icons';
import { Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

import colors from '@/config/colors';

interface ImageSliderProps {
  images: string[];
  showButtons?: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  showButtons = false,
}) => {
  return (
    <View style={styles.container}>
      <Swiper
        showsButtons={showButtons}
        showsPagination
        autoplay
        autoplayTimeout={3}
        loop
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        nextButton={
          <MaterialIcons
            name='navigate-next'
            size={50}
            color={colors.primaryDark}
          />
        }
        prevButton={
          <MaterialIcons
            name='navigate-before'
            size={50}
            color={colors.primaryDark}
          />
        }
      >
        {images.map((imageUri, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: imageUri }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    height: 230,
    width: '100%',
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  slide: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  dot: {
    backgroundColor: colors.white,
    width: 10,
    height: 10,
    borderRadius: 5,
    top: 25,
  },
  activeDot: {
    backgroundColor: colors.primaryDark,
    width: 10,
    height: 10,
    borderRadius: 5,
    top: 25,
  },
});
