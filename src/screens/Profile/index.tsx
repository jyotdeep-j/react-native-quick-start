import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';



const ProfileScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>This is profile screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#fff",
    },
    heading: {
        textAlign: 'center',
    }
})


export default ProfileScreen;


