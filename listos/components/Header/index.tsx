import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Definindo o tipo das props
interface HeaderProps {
  title: string; // O título que será exibido no header
  onLeftPress?: () => void; // Função opcional para o botão esquerdo
  onRightPress?: () => void; // Função opcional para o botão direito
}

const Header: React.FC<HeaderProps> = ({ title, onLeftPress, onRightPress }) => {
  return (
    <View style={styles.headerContainer}>
      
      {/* Botão à esquerda (Voltar, Menu, etc.) */}
      <TouchableOpacity onPress={onLeftPress}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Título central */}
      <Text style={styles.headerTitle}>{title}</Text>

      {/* Botão à direita (Configurações, etc.) */}
      <TouchableOpacity onPress={onRightPress}>
        <Ionicons name="settings" size={24} color="white" />
      </TouchableOpacity>
      
    </View>
  );
};

// Estilos do Header
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#4CAF50', // Cor do fundo (verde no exemplo)
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    elevation: 5, // Sombra (apenas no Android)
    shadowColor: '#000', // Sombra (no iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;
