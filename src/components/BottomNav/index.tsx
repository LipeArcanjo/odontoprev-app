import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const BottomNav = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();

  const isActive = (name: string) => route.name === name;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.item, isActive('Home') && styles.active]}>
        <Ionicons name="home" size={22} color={isActive('Home') ? '#339cff' : '#a0a0a0'} />
        <Text style={[styles.label, isActive('Home') && styles.activeLabel]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('DataVision')} style={[styles.item, isActive('DataVision') && styles.active]}>
        <FontAwesome5 name="calendar-alt" size={20} color={isActive('DataVision') ? '#339cff' : '#a0a0a0'} />
        <Text style={[styles.label, isActive('DataVision') && styles.activeLabel]}>DataVision</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Members')} style={[styles.item, isActive('Members') && styles.active]}>
        <Ionicons name="person-outline" size={22} color={isActive('Members') ? '#339cff' : '#a0a0a0'} />
        <Text style={[styles.label, isActive('Members') && styles.activeLabel]}>Members</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // CONTAINER
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    zIndex: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 6,
    elevation: 10,
  },

// BOTÕES DE NAVEGAÇÃO

  item: {
    height: 48,
    alignItems: 'center',
    padding: 8,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },

  label: {
    fontSize: 12,
    marginTop: 2,
    color: '#a0a0a0',

    // ITEM QUANDO NÃO SELECIONADO (DESATIVO) ↓
    display: 'none',
  },

  // QUANDO ATIVA ↓

  active: {
    backgroundColor: '#eaf4ff',
  },

  activeLabel: {
    color: '#339cff',
    fontWeight: '600',
    display: 'flex',
  },
});

export default BottomNav;
