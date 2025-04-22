import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import OkChevron from "../../assets/Icons/OkChevron";
import FadeUpper from "../../assets/Icons/FadeUpper";
import FadeLower from "../../assets/Icons/FadeLower";
import ArrowUp from "../../assets/Icons/ArrowUp";
import ArrowDown from "../../assets/Icons/ArrowDown";

const RoundingInterface = () => {
  	
  	return (
    		<View style={styles.tipScreenRoundingV4}>
      			<View style={styles.baseScreenPriceAndOk}>
        				<View style={styles.preis}>
          					<Text style={styles.betrag}>Betrag:</Text>
          					<View style={[styles.zahl, styles.zahlFlexBox]}>
            						<Text style={styles.betrag}>3.20</Text>
            						<Text style={styles.betrag}>€</Text>
          					</View>
        				</View>
        				<View style={[styles.okButton, styles.roudUpShadowBox]}>
          					<View style={[styles.stateLayer, styles.zahlFlexBox]}>
            						<Text style={styles.labelText}>OK</Text>
            						<OkChevron style={styles.icon} width={40} height={40} />
          					</View>
        				</View>
      			</View>
      			<View style={[styles.currentUpDown, styles.followingPosition]}>
        				<View style={[styles.numbers, styles.followingFlexBox]}>
          					<View style={styles.higher}>
            						<View style={[styles.followingValues, styles.followingFlexBox]}>
              							<View style={styles.lower1FlexBox}>
                								<Text style={[styles.text1, styles.textTypo]}>4.50</Text>
                								<Text style={[styles.text1, styles.textTypo]}>€</Text>
              							</View>
              							<View style={styles.lower1FlexBox}>
                								<Text style={[styles.text3, styles.textTypo]}>4.00</Text>
                								<Text style={[styles.text3, styles.textTypo]}>€</Text>
              							</View>
            						</View>
            						<FadeLower style={[styles.fadeIcon, styles.fadeIconPosition]} />
          					</View>
          					<View style={[styles.betragAktuell, styles.currentTotalFlexBox]}>
            						<Text style={styles.currentTotalText}>3.50</Text>
            						<Text style={styles.currentTotalText}>{`€`}</Text>
                    </View>
                    <View style={styles.lower}>
                        <View style={[styles.followingValues1, styles.followingFlexBox]}>
                            <View style={[styles.lower1, styles.lower1FlexBox]}>
                                <Text style={[styles.text3, styles.textTypo]}>3.20</Text>
                                <Text style={[styles.text3, styles.textTypo]}>€</Text>
                            </View>
                            <View style={[styles.lower1, styles.lower1FlexBox]}>
                                <Text style={[styles.text1, styles.textTypo]}>3.20</Text>
                                <Text style={[styles.text1, styles.textTypo]}>€</Text>
                            </View>
                        </View>
                        <FadeUpper style={[styles.fadeIcon, styles.fadeIconPosition]} />
                    </View>
                </View>
                <View style={styles.roundingOptions}>
                    <View style={[styles.roundUp, styles.roudUpLayout]}>
                        <ArrowUp style={styles.icon1} width={49} height={50} />
                    </View>
                    <View style={styles.roudUpLayout}>
                        <View style={[styles.roundDown1, styles.fadeIconPosition]}>
                            <ArrowDown width={49} height={50} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    baseText: {
        includeFontPadding: false,
        textAlignVertical: 'center'
    },
    zahlFlexBox: {
        alignSelf: "stretch",
        justifyContent: "center"
    },
    roudUpShadowBox: {
        minWidth: 80,
        backgroundColor: "#ece6f0",
        borderRadius: 16,
        shadowOpacity: 1,
        elevation: 8,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.15)",
        justifyContent: "center",
        alignItems: "center"
    },
    followingPosition: {
        left: "50%",
        position: "absolute"
    },
    followingFlexBox: {
        gap: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    textTypo: {
        color: "#4f4f4f",
        fontFamily: "Roboto-Regular",
        textAlign: "center"
    },
    fadeIconPosition: {
        bottom: "0%",
        top: "0%",
        overflow: "hidden",
        left: "0%",
        right: "0%",
        height: "100%",
        position: "absolute",
        width: "100%"
    },
    lower1FlexBox: {
        gap: 4,
        flexDirection: "row",
        zIndex: 1
    },
    currentTotalFlexBox: {
        gap: 4,
        flexDirection: "row",
        zIndex: 5,
    },
    roudUpLayout: {
        height: 88,
        width: 88
    },
    betrag: {
        fontSize: 28,
        lineHeight: 36,
        fontWeight: "500",
        fontFamily: "Roboto-Medium",
        color: "#afafaf",
        textAlign: "center"
    },
    zahl: {
        flexDirection: "row",
        alignItems: "center"
    },
    preis: {
        top: "12.22%",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch", // Allows the container to stretch within its parent
        flexDirection: "column", // Ensures the text stacks properly
    },
    labelText: {        
        fontSize: 45,
        color: "#65558f",
        fontFamily: "Roboto-Regular",
        lineHeight: 52,
        textAlign: "center"
    },
    icon: {
        overflow: "hidden"
    },
    stateLayer: {
        paddingLeft: 16,
        paddingTop: 16,
        paddingRight: 20,
        paddingBottom: 16,
        gap: 12,
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        alignSelf: "stretch"
    },
    okButton: {
        height: "12.22%",
        width: "57.04%",
        top: "74.65%",
        right: "21.48%",
        bottom: "13.13%",
        left: "21.48%",
        overflow: "hidden",
        position: "absolute"
    },
    baseScreenPriceAndOk: {
        top: "-0.01%",
        bottom: "0.01%",
        left: "0%",
        right: "0%",
        height: "100%",
        position: "absolute",
        width: "100%"
    },
    text1: {
        fontSize: 24,
        lineHeight: 32
    },
    text3: {
        fontSize: 38,
        lineHeight: 52,
        color: "#4f4f4f"
    },
    followingValues: {
        height: "39.93%",
        marginLeft: -46.58,
        top: "27.06%",
        bottom: "33.01%",
        width: 102,
        left: "50%",
        position: "absolute"
    },
    fadeIcon: {
        maxWidth: "100%",
        maxHeight: "100%"
    },
    higher: {
        height: 121,
        width: 180
    },
    currentTotalText: {
        fontSize: 80,
        lineHeight: 84, // Should be ~10-20% larger than font size
        fontWeight: "600",
        fontFamily: "Roboto-Bold",
        color: "#1f1f1f",
        textAlign: "center",
        includeFontPadding: false, // Prevents extra padding around text
        textAlignVertical: 'center', // Ensures vertical centering
    },
    betragAktuell: {
        minHeight: 100, // some breathing room
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10, // Reduced vertical padding
        zIndex: 4,
        backgroundColor: 'transparent' // Remove test color
    },
    lower1: {
        justifyContent: "center",
        alignItems: "center"
    },
    followingValues1: {
        height: "15.83%",
        marginLeft: -34.23,
        top: "30.87%",
        bottom: "53.3%",
        width: 89,
        left: "50%",
        position: "absolute"
    },
    lower: {
        height: 120,
        width: 180
    },
    numbers: {
        width: 294
    },
    icon1: {},
    roundUp: {
        minWidth: 80,
        backgroundColor: "#ece6f0",
        borderRadius: 16,
        shadowOpacity: 1,
        elevation: 8,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.15)",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        flexDirection: "row"
    },
    roundDown1: {
        minWidth: 80,
        backgroundColor: "#ece6f0",
        borderRadius: 16,
        shadowOpacity: 1,
        elevation: 8,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.15)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    roundingOptions: {
        alignItems: "flex-end",
        gap: 39,
        marginLeft: -29,
        justifyContent: "center"
    },
    currentUpDown: {
        marginLeft: -179,
        top: 244,
        width: 358,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    tipScreenRoundingV4: {
        height: 892,
        width: "100%",
        flex: 1,
        backgroundColor: "#ffff"
    }
});

export default RoundingInterface;