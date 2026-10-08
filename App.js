import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function App() {
  const [points, setPoints] = useState(0);

  const handleAddPoints = () => {
    setPoints((prev) => prev + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* App Bar / Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile Content */}
      <View style={styles.content}>
        {/* Avatar Section */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{
                uri: 'https://api.dicebear.com/7.x/avataaars/png?seed=Savishka&glasses=round',
              }}
              style={styles.avatarImage}
            />
            {/* Verified Green Badge */}
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>✓</Text>
            </View>
          </View>
        </View>

        {/* Divider Line */}
        <View style={styles.divider} />

        {/* Profile Details List */}
        <View style={styles.detailsContainer}>
          {/* Name */}
          <View style={styles.detailItem}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>Savishka</Text>
          </View>

          {/* Email */}
          <View style={styles.detailItem}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.row}>
              <Text style={styles.icon}>✉</Text>
              <Text style={styles.value}>savishka@gmail.com</Text>
            </View>
          </View>

          {/* Points */}
          <View style={styles.detailItem}>
            <Text style={styles.label}>Points</Text>
            <View style={styles.row}>
              <Text style={styles.icon}>★</Text>
              <Text style={styles.value}>{points}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={handleAddPoints}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    backgroundColor: '#000000',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  avatarSection: {
    alignItems: 'center',
    marginVertical: 16,
  },
  avatarWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 2,
    right: 6,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -2,
  },
  divider: {
    height: 1.5,
    backgroundColor: '#222222',
    marginVertical: 20,
    width: '100%',
  },
  detailsContainer: {
    marginTop: 8,
  },
  detailItem: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
  value: {
    fontSize: 15,
    color: '#4B5563',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    fontSize: 16,
    color: '#111827',
  },
  fab: {
    position: 'absolute',
    bottom: 28,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabIcon: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '300',
    marginTop: -2,
  },
});
