import React, { useEffect, useState } from 'react';
import { Text, View, TouchableHighlight, FlatList, Alert } from 'react-native';
import Header from '../../components/atoms/Header';
import styles from './homeDashboard.styles';
import config from '../../config/colors';
import FooterTab from "../../components/atoms/FooterTab";
import axios from "axios";
import { Divider, TextInput } from 'react-native-paper';
import { Card, IconButton, Title } from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import { useFocusEffect } from '@react-navigation/native';

const HomeDashboard = ({ navigation }: { navigation: any }) => {
    const [totalCases, setTotalCases] = useState(0)
    const [totalDeaths, setTotalDeaths] = useState(0)
    const [dailyCases, setDailyCases] = useState(0)
    const [dailyDeaths, setDailyDeaths] = useState(0)
    const [loading, setLoading] = useState(true);

    const [selectedValue, setSelectedValue] = useState('');
    const [isSearching, setIsSearching] = useState(false)
    const data = require('./../../assets/India_data.json')
    const [newData, setNewData] = useState(data)
    const [cityData, setCityData] = useState(null)
    const [dataToBeSearched, setDataTobeSearched] = useState([])
    const [cityDailyTest, setCityDailyTest] = useState(0)
    const [cityDailyCases, setCityDailyCases] = useState(0)
    const [citydailyDeaths, setCityDailyDeaths] = useState(0)
    const [cityRecovered, setCityRecovered] = useState(0)


    useEffect(() => {
        getCovidDetails()
    });


    const getCovidDetails = () => {

        let res = axios.get("https://data.covid19india.org/v4/min/data.min.json").then(res => {
            setCityData(res.data)
            Object.keys(cityData).forEach(element => {
                if (element === 'TT') {
                    setTotalCases(cityData[element]["total"]["confirmed"])
                    setTotalDeaths(cityData[element]["total"]["deceased"])
                    setDailyDeaths(cityData[element]["delta"]["deceased"])
                    setDailyCases(cityData[element]["delta"]["confirmed"])
                    setLoading(false)
                }
            })
        }).catch(err => {
            console.log("Unable to get data", err)
        })
    }

    const getData = (item) => {
        getCovidCityData()
        setSelectedValue(item.city);
        setDataTobeSearched([item.state, item.city])
        setIsSearching(false)
    }

    const getCovidCityData = () => {
        Object.keys(cityData).forEach(element => {

            if (element != 'TT' && cityData[element]["districts"][dataToBeSearched[1]] != null) {
                const coviddata = cityData[element]["districts"][dataToBeSearched[1]]
                setCityDailyCases(coviddata["delta"]["confirmed"]> 0 ? coviddata["delta"]["confirmed"] : 0)
                setCityDailyDeaths(coviddata["delta"]["deceased"] > 0 ? coviddata["delta"]["deceased"] : 0)
                setCityDailyTest(coviddata["total"]["tested"] > 0 ? coviddata["delta"]["tested"] : 0)
                setCityRecovered(coviddata["delta"]["recovered"] > 0 ? coviddata["delta"]["recovered"] : 0)
            }
        });
    }

    const handleTitle = (text) => {
        data.map((item) => {
            const searchedData = data.filter(
                function (city) {
                    const itemData = city.city
                        ? city.city.toUpperCase()
                        : ''.toUpperCase();

                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });

            setNewData(searchedData)
            setSelectedValue(text)
        })
    }

    return (
        <>
            <Header title="Home" navigation={navigation} />
            <View style={styles.container}>
                <Spinner
                    visible={loading}
                    size="large"
                    textContent={'Loading'}
                    textStyle={{
                        color: config.WHITE,
                        fontSize: 12,
                        marginTop: 2,
                    }}
                />
                <View style={styles.innerContainer}>

                    <View style={styles.toolBox}>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <View style={{ display: 'flex', width: "50%", alignItems: "center" }}>
                                <Text style={{ alignItems: 'center', color: '#1D1D1E', top: -7 }}>Total cases</Text>
                                <Text style={styles.text}>{totalCases}</Text>
                            </View>

                            <View style={{ display: 'flex', borderLeftWidth: 1, width: "50%", alignItems: "center", borderLeftColor: config.BORDER_GREY }}>
                                <Text style={{ alignItems: 'center', color: '#1D1D1E', top: -7 }}>Total Deaths</Text>
                                <Text style={styles.text}>{totalDeaths}</Text>
                            </View>

                        </View>

                    </View>

                    <View style={styles.toolBox2}>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <View style={{ display: 'flex', width: "50%", alignItems: "center" }}>
                                <Text style={{ alignItems: 'center', color: '#1D1D1E', top: -7 }}>Daily Cases</Text>
                                <Text style={styles.text}>{dailyCases}</Text>
                            </View>

                            <View style={{ display: 'flex', borderLeftWidth: 1, width: "50%", alignItems: "center", borderLeftColor: config.BORDER_GREY }}>
                                <Text style={{ alignItems: 'center', color: '#1D1D1E', top: -7 }}>Deaths Today</Text>
                                <Text style={styles.text}>{dailyDeaths}</Text>
                            </View>

                        </View>

                    </View>


                    <View style={{ display: 'flex', top: 220 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins', fontWeight: 'bold', left: 5 }}>Search</Text>
                        <View style={{ display: 'flex', marginTop: 25, width: "100%" }}>
                            <TextInput
                                value={selectedValue}
                                placeholder="Select City.."
                                onChangeText={(text) => {
                                    setIsSearching(true)
                                    handleTitle(text)
                                }}
                                onFocus={() => setIsSearching(false)}
                            />
                            {isSearching &&
                                <FlatList
                                    data={newData}
                                    style={{ position: 'absolute', backgroundColor: '#FFF', top: '35%', width: '100%', marginTop: 40 }}
                                    renderItem={({ item }) => (
                                        <View style={{ backgroundColor: '#FFF', width: '100%' }}>
                                            <TouchableHighlight
                                                onPress={() => {
                                                    setLoading(true)
                                                    getData(item)
                                                    setLoading(false)
                                                }}>
                                                <Text >
                                                    {item.city}
                                                    <Text style={{ color: config.BORDER_GREY }}>{', '}{item.state}</Text>
                                                </Text>
                                            </TouchableHighlight>
                                            <Divider style={{ backgroundColor: 'grey' }} />
                                        </View>
                                    )}
                                    keyExtractor={(item, index) => index.toString()}
                                />}
                        </View>
                    </View>

                    {!isSearching && selectedValue != null && selectedValue.length > 0 && 
                        <View style={{ display: 'flex', top: 250, height: '50%', width: '100%' }}>

                            <Text style={{ fontSize: 16, fontFamily: 'Poppins', fontWeight: 'bold' }}>Search Result</Text>
                            <IconButton
                                icon="refresh"
                                color={config.SKY_BLUE}
                                size={20}
                                style={{ left: '90%', right: '10%', top: -32 }}
                                onPress={() => {   setLoading(true)
                                    getCovidCityData()
                                    setLoading(false) }}
                            />
                            <View style={{
                                paddingTop: 0, display: 'flex',
                                flexDirection: 'row',
                                marginBottom: 20, top: 10
                            }}>
                                <View style={styles.container}>

                                    <Card
                                        style={{
                                            backgroundColor: config.LIGHT_GREY,
                                            elevation: 5,
                                            width: '48%',
                                            height: '120%'
                                        }}
                                        onPress={() => {

                                        }}>
                                        <Card.Content style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}>
                                            <Title style={{
                                                fontSize: 10,
                                                letterSpacing: 0.25,
                                                lineHeight: 20,
                                                fontWeight: '400',
                                                fontFamily: 'Open Sans',
                                                left: -9,
                                                top: -20,
                                                color: config.SKY_BLUE
                                            }}>
                                                {'Daily Cases:'}

                                            </Title>
                                            <View style={{ justifyContent: 'center' }}>
                                                <Text style={styles.cityDetails}>{cityDailyCases}</Text></View>
                                        </Card.Content>
                                    </Card>
                                    <Card
                                        style={{
                                            backgroundColor: config.LIGHT_GREY,
                                            elevation: 5,
                                            width: '48%',
                                            left: 15,
                                            height: '120%'
                                        }}
                                        onPress={() => {
                                        }}>
                                        <Card.Content style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}>
                                            <Title style={{
                                                fontSize: 10,
                                                letterSpacing: 0.25,
                                                lineHeight: 20,
                                                fontWeight: '400',
                                                fontFamily: 'Open Sans',
                                                left: -9,
                                                top: -20,
                                                color: config.SKY_BLUE
                                            }}>
                                                {'Daily Deaths'}
                                            </Title>
                                            <View>
                                                <Text style={styles.cityDetails}>{citydailyDeaths}</Text></View>
                                        </Card.Content>
                                    </Card>

                                    <Card
                                        style={{
                                            backgroundColor: config.LIGHT_GREY,
                                            elevation: 5,
                                            width: '48%',
                                            top: "25%",
                                            right: 331,
                                            height: '120%'

                                        }}
                                        onPress={() => {
                                        }}>
                                        <Card.Content style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}>
                                            <Title style={{
                                                fontSize: 10,
                                                letterSpacing: 0.25,
                                                lineHeight: 20,
                                                fontWeight: '400',
                                                fontFamily: 'Open Sans',
                                                left: -9,
                                                top: -20,
                                                color: config.SKY_BLUE

                                            }}>
                                                {'Recovered'}
                                            </Title>
                                            <View>
                                                <Text style={styles.cityDetails}>{cityRecovered}</Text></View>
                                        </Card.Content>
                                    </Card>
                                    <Card
                                        style={{
                                            backgroundColor: config.LIGHT_GREY,
                                            elevation: 5,
                                            width: '48%',
                                            top: 85,
                                            right: 315,
                                            height: '120%'
                                        }}
                                        onPress={() => {
                                        }}>
                                        <Card.Content style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}>
                                            <Title style={{
                                                fontSize: 10,
                                                letterSpacing: 0.25,
                                                lineHeight: 20,
                                                fontWeight: '400',
                                                fontFamily: 'Open Sans',
                                                left: -9,
                                                top: -20,
                                                color: config.SKY_BLUE
                                            }}>
                                                {'Daily Covid Tests'}
                                            </Title>
                                            <View>
                                                <Text style={styles.cityDetails}>{cityDailyTest}</Text></View>
                                        </Card.Content>
                                    </Card>
                                </View>
                            </View>
                        </View>}
                </View>
            </View>
            <FooterTab navigation={navigation} />
        </>
    );
};




export default HomeDashboard;

