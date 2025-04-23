import * as React from "react";
import {Text, StyleSheet, View, Pressable} from "react-native";
export default function LabeledScaleOption () {
    return (
        <View style={styles.container}>
        <View style={styles.group4}>
            <View style={styles.stateLayer}>
            <Text style={styles.$7}>
                {`7`}
            </Text>
            </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 94,
    height: 94,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: '#ECE6F0',
  },
  $7: {
    width: 41.313,
    height: 33.051,
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#4F4F4F',
    textAlign: 'center',
    fontFamily: "Roboto",
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 28,
  },
  group4: {
    width: 101.313,
    height: 93.051,
    flexShrink: 0,
  },
  stateLayer: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingLeft: 30,
    paddingBottom: 30,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
  },
});
