import * as React from "react";
import {Text, StyleSheet, Image, View, Pressable} from "react-native";
import FullSmile from "../../assets/Icons/FullSmile";
import PartialSmile from "../../assets/Icons/PartialSmile";
import Indifferent from "../../assets/Icons/Indifferent";
import PartialFrown from "../../assets/Icons/PartialFrown";
import FullFrown from "../../assets/Icons/FullFrown";

const FollowUpGeneral = () => {
  	
  	return (
    		<View style={styles.allgemeinFu}>
      			<View style={[styles.surveyScreenGeneral, styles.stateLayerPosition]}>
        				<Text style={styles.wieHatIhnen}>Wie hat Ihnen der Bezahlprozess gefallen?</Text>
          					<Pressable style={[styles.buttonsLabels, styles.stateLayerFlexBox]} onPress={()=>{}}>
            						<View style={styles.buttons}>
              							<View style={styles.stateLayerFlexBox}>
                								<View style={[styles.scaleOption, styles.scaleShadowBox]}>
                  									<View style={styles.stateLayerWrapper}>
                    										<View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
                      											<FullSmile style={styles.icon} width={36} height={36} />
                    										</View>
                  									</View>
                								</View>
              							</View>
              							<View style={styles.stateLayerFlexBox}>
                								<View style={[styles.scaleOption1, styles.scaleShadowBox]}>
                  									<View style={styles.stateLayerWrapper}>
                    										<View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
                      											<PartialSmile style={styles.icon} width={36} height={36} />
                    										</View>
                  									</View>
                								</View>
              							</View>
              							<View style={styles.stateLayerFlexBox}>
                								<View style={[styles.scaleOption2, styles.scaleShadowBox]}>
                  									<View style={styles.stateLayerWrapper}>
                    										<View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
                      											<Indifferent style={styles.icon} width={36} height={36} />
                    										</View>
                  									</View>
                								</View>
              							</View>
              							<View style={styles.stateLayerFlexBox}>
                								<View style={[styles.scaleOption3, styles.scaleShadowBox]}>
                  									<View style={styles.stateLayerWrapper}>
                    										<View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
                      											<PartialFrown style={styles.icon} width={36} height={36} />
                    										</View>
                  									</View>
                								</View>
              							</View>
              							<View style={styles.stateLayerFlexBox}>
                								<View style={[styles.scaleOption4, styles.scaleShadowBox]}>
                  									<View style={styles.stateLayerWrapper}>
                    										<View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
                      											<FullFrown style={styles.icon} width={36} height={36} />
                    										</View>
                  									</View>
                								</View>
              							</View>
            						</View>
          					</Pressable>
          					</View>
          					</View>);
        				};
        				
        				const styles = StyleSheet.create({
          					stateLayerPosition: {
            						left: 0,
            						top: 0,
            						position: "absolute"
          					},
          					stateLayerFlexBox: {
            						flexDirection: "row",
            						alignItems: "center"
          					},
          					scaleShadowBox: {
            						height: 94,
            						width: 94,
            						backgroundColor: "#ece6f0",
            						borderRadius: 28,
            						shadowOpacity: 1,
            						elevation: 8,
            						shadowRadius: 8,
            						shadowOffset: {
              							width: 0,
              							height: 4
            						},
            						shadowColor: "rgba(0, 0, 0, 0.15)",
            						overflow: "hidden",
            						flexDirection: "row",
            						justifyContent: "center",
            						alignItems: "center"
          					},
          					wieHatIhnen: {
            						height: "14.63%",
            						width: "70.68%",
            						top: "9.93%",
            						left: "14.66%",
            						fontSize: 32,
            						lineHeight: 40,
            						fontFamily: "Roboto-Regular",
            						color: "#4f4f4f",
            						textAlign: "center",
            						display: "flex",
            						justifyContent: "center",
            						alignItems: "center",
            						position: "absolute"
          					},
          					icon: {
            						overflow: "hidden"
          					},
          					stateLayer: {
            						padding: 30,
            						justifyContent: "center",
            						left: 0,
            						top: 0,
            						position: "absolute"
          					},
          					stateLayerWrapper: {
            						width: 96,
            						height: 96
          					},
          					scaleOption: {
            						overflow: "hidden"
          					},
          					scaleOption1: {
            						overflow: "hidden"
          					},
          					scaleOption2: {
            						overflow: "hidden"
          					},
          					scaleOption3: {
            						overflow: "hidden"
          					},
          					scaleOption4: {
            						overflow: "hidden"
          					},
          					buttons: {
            						height: 570,
            						alignItems: "flex-end",
            						gap: 15,
            						justifyContent: "center"
          					},
          					buttonsLabels: {
            						marginLeft: -47,
            						top: 257,
            						left: "50%",
            						justifyContent: "center",
            						position: "absolute",
            						flexDirection: "row"
          					},
          					surveyScreenGeneral: {
            						width: 412,
            						height: 892
          					},
          					allgemeinFu: {
            						flex: 1,
            						width: "100%",
            						height: 892
          					}
        				});
        				
        				export default FollowUpGeneral;
        				