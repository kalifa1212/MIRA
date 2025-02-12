import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native';
//import styles from './notificationCard.style';

const NotificationCard = ({ notification }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRead, setIsRead] = useState(notification.isRead);
  //const notification=sampleNotifications;
  const handleCardPress = () => {
    setIsExpanded(!isExpanded);
    setIsRead(true);
  };

  return (
    <TouchableOpacity
      style={[styles.container, styles.shadowProp, isRead ? {} : styles.unread]}
      onPress={handleCardPress}
    >
      <View style={styles.header}>
        {/* Icône en fonction du type */}
        <Image source={notification.icon} style={styles.icon} />
        <View style={styles.column}>
          <Text style={styles.title}>{notification.title}</Text>
          <Text style={styles.date}>{notification.date} - {notification.time}</Text>
        </View>
      </View>

      <Text numberOfLines={isExpanded ? 7 : 2} style={styles.description}>
        {notification.description}
      </Text>

      {/* Affichage spécifique si l'événement est à venir */}
      {notification.isUpcoming && <Text style={styles.upcoming}>Événement à venir !</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    elevation: 3,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  unread: {
    backgroundColor: '#F0F8FF', // Bleu clair pour les notifications non lues
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
  },
  column: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  upcoming: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#D32F2F',
    textAlign: 'center',
  },
});

export default NotificationCard;
