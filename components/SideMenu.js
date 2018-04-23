import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <TouchableOpacity onPress={this.props.navigation.navigate("HoSo")}>
            <Text>Hồ sơ</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={this.props.navigation.navigate("DanhSach")}
          >
            <Text>Danh sách</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={this.props.navigation.navigate("DauTrang")}
          >
            <Text>Dấu trang</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={this.props.navigation.navigate("KhoanhKhac")}
          >
            <Text>Khoảnh khắc</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={this.props.navigation.navigate("CaiDatVaRiengTu")}
          >
            <Text>Cài đặt và riêng tư</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={this.props.navigation.navigate("TroGiup")}>
            <Text>Trung tâm Trợ giúp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}