import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  Modal,
} from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const [toDoList, setToDoList] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddList = () => {
    if (!title || !description) {
      Alert.alert('Error', 'Please provide a title and description.');
      return;
    }
    const newList = {
      id: Date.now().toString(),
      title,
      description,
      status: 'pending',
    };
    setToDoList([...toDoList, newList]);
    setTitle('');
    setDescription('');
  };

  const handleEditList = () => {
    setToDoList((prevList) =>
      prevList.map((item) =>
        item.id === editingItem.id
          ? { ...item, title, description, status: editingItem.status }
          : item
      )
    );
    setEditingItem(null);
    setModalVisible(false);
  };

  const handleRemoveList = (id) => {
    setToDoList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const toggleStatus = (id) => {
    setToDoList((prevList) =>
      prevList.map((item) =>
        item.id === id
          ? { ...item, status: item.status === 'pending' ? 'finished' : 'pending' }
          : item
      )
    );
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setTitle(item.title);
    setDescription(item.description);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, { height: 60 }]}
          placeholder="Description"
          multiline
          value={description}
          onChangeText={setDescription}
        />
        <TouchableOpacity style={styles.addButton} onPress={editingItem ? handleEditList : handleAddList}>
          <Text style={styles.addButtonText}>{editingItem ? 'Update' : 'Add'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
  data={toDoList}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.listItem}>
      <View style={styles.listDetails}>
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text style={styles.listDescription}>{item.description}</Text>
        <Text
          style={[
            styles.listStatus,
            {
              color: item.status === 'pending' ? 'orange' : 'green', // Apply color based on status
            },
          ]}
        >
          Status: {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => toggleStatus(item.id)}
        >
          <Text style={styles.actionButtonText}>Toggle Status</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.editButton]}
          onPress={() => openEditModal(item)}
        >
          <Text style={styles.actionButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => handleRemoveList(item.id)}
        >
          <Text style={styles.actionButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
/>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit To-Do</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={[styles.input, { height: 60 }]}
              placeholder="Description"
              multiline
              value={description}
              onChangeText={setDescription}
            />
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.actionButton, styles.saveButton]}
                onPress={handleEditList}
              >
                <Text style={styles.actionButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.actionButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#303136',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  listItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  listDetails: {
    marginBottom: 10,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
  listStatus: {
    fontSize: 14,
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#ededed',
    marginRight: 5,
  },
  editButton: {
    backgroundColor: '#6fe8b8',
  },
  deleteButton: {
    backgroundColor: '#ad2a44',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    width: '80%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#6fe8b8',
  },
  cancelButton: {
    backgroundColor: '#ad2a44',
  },
});

export default DashboardScreen;
