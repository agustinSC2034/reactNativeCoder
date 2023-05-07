import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from "./styles";

const CustomModal = ({ isVisible, animationType, selectedEvent, onCancel, onDelete}) => {
    return (
        <Modal visible={isVisible} animationType={animationType}>
        <View style={styles.container}>
          <Text style={styles.title}>{selectedEvent?.value}</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.detailMessage}>Usted desea eliminar este producto?</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button 
              title='Cancelar'
              color='#52528C'
              onPress={onCancel}
            />
            <Button 
            title='Borrar'
            color='#52528C'
            onPress={() => onDelete(selectedEvent.id)}
            />
          </View>
        </View>
      </Modal>
    )
};

export default CustomModal;