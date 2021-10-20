import React from 'react';
import { ScrollView, View , Text} from "react-native";
import FooterTab from "../../components/atoms/FooterTab";
import Header from '../../components/atoms/Header';

const More = ({ navigation }: { navigation: any }) => {

    return(
        <>
    <Header title="More" navigation={navigation} />
    <ScrollView>
        <View style={{marginTop:200,left:50}}>
        <Text style={{fontSize:25}}>More Items</Text>
        </View>
    </ScrollView>
    
    <FooterTab navigation={navigation} />
    </>
    );
};


export default More
