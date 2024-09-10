import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header/index'; // Importe o Header

const App = () => {
  const handleLeftPress = () => {
    alert('Botão esquerdo pressionado');
  };

  const handleRightPress = () => {
    alert('Botão direito pressionado');
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Minha Página" 
        onLeftPress={handleLeftPress} 
        onRightPress={handleRightPress} 
      />
      {/* O resto do seu conteúdo da página */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;


// import React, { useRef, useEffect } from 'react';
// import { View, Text, Button, Animated, StyleSheet } from 'react-native';
// import { Easing } from 'react-native';


// const App = () => {
//   // Referências de animação
//   const scaleAnim = useRef(new Animated.Value(1)).current; // Animação de escala
//   const rotateAnim = useRef(new Animated.Value(0)).current; // Animação de rotação

//   // Use efeito para começar as animações
//   useEffect(() => {
//     // Animações de escala e rotação rodando em paralelo
//     Animated.loop(
//       Animated.parallel([
//         Animated.sequence([
//           Animated.timing(scaleAnim, {
//             toValue: 1.5, // Aumentar o tamanho
//             duration: 1000,
//             useNativeDriver: true,
//           }),
//           Animated.timing(scaleAnim, {
//             toValue: 1, // Voltar ao tamanho original
//             duration: 1000,
//             useNativeDriver: true,
//           }),
//         ]),
//         Animated.timing(rotateAnim, {
//           toValue: 1, // Girar de 0 a 1 (que será interpolado em graus)
//           duration: 2000, // 2 segundos para completar uma rotação
//           useNativeDriver: true,
//           easing: Easing.linear, // Girar continuamente usando easing linear
//         }),
//       ])
//     ).start();
//   }, [scaleAnim, rotateAnim]);

//   // Interpolar o valor de rotação para ser em graus
//   const rotateInterpolate = rotateAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'], // Girar 360 graus
//   });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>? oi bebe</Text>
      
//       {/* Imagem animada */}
//       <Animated.Image 
//         source={require('../../assets/images/pngwing.com (1).png')} 
//         style={[
//           styles.image, 
//           { 
//             transform: [
//               { scale: scaleAnim }, // Animação de escala
//               { rotate: rotateInterpolate } // Animação de rotação
//             ] 
//           }
//         ]} 
//       />
      
//       <Button title="Clique aqui" onPress={() => alert('Sim')} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     backgroundColor: '#FFD700', // Cor de fundo
//     borderRadius: 10, // Bordas arredondadas
//   },
// });

// export default App;
