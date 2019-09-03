import React, {Component} from 'react';
import {Image, Picker, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {HalfdayCalendar} from 'react-native-halfday-calendar';
// import HalfdayCalendar from "../common/HalfdayCalendar";
// import console = require("console");

class AbsenceDetail extends Component {
    static navigationOptions = {
        title: 'New Request',
  };
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      date1: '',
      selectedSpecialDay: '',
      rangeStarted: false,
      startDate: null,
      endDate: null,
      startDateIsHalf: null,
      endDateIsHalf: null,
      markedDates: {},
      showCalendar: false
    };
  }

  render() {
    return (
      <View style={{flex: 1, height: '100%', backgroundColor: 'white'}}>
        {this.state.showCalendar && (
          <HalfdayCalendar
            onConfirm={async (startDate, endDate, startDateIsHalf, endDateIsHalf) => {
              await this.setState({
                showCalendar: false,
                startDate,
                endDate,
                startDateIsHalf,
                endDateIsHalf
              });
            }}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            startDateIsHalf={this.state.startDateIsHalf}
            endDateIsHalf={this.state.endDateIsHalf}
            onCancel={() => this.setState({showCalendar: false})}
          />
        )}

        <ScrollView style={{height: '90%'}}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 10,
              margin: 10,
              flexDirection: 'row'
            }}
          >
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
              }}
              style={{
                width: 70,
                height: 80,
                backgroundColor: '#f2f2f2',
                borderRadius: 18
              }}
            />
            <View style={{marginLeft: 20, alignSelf: 'center'}}>
              <Text style={{color: 'black'}}>Welcome @username</Text>
              {/*<Text style={{ color: "black" }}>tranee</Text>*/}
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#C4D7ED',
              padding: 10,
              margin: 10,
              borderRadius: 10,

              flexDirection: 'row'
            }}
          >
            <Icon name='md-cog' size={30}/>
            <Text style={{color: '#000000', marginLeft: 10}}>
              This absence is currently approved. Tap here to request for a
              change.
            </Text>
          </View>
          <View
            style={{borderTopWidth: 1, borderBottomWidth: 1, padding: 10}}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Text style={{fontWeight: 'bold'}}>From - To</Text>
              <TouchableOpacity
                style={{marginLeft: 15, flexDirection: 'row'}}
                onPress={() => this.setState({showCalendar: true})}
              >
                <Icon name='md-calendar' size={25}/>
                {this.state.startDate && (
                  <Text style={{lineHeight: 25, marginLeft: 10}}>
                    {this.state.startDate} - {this.state.endDate}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/*  */}
          <View
            style={{borderTopWidth: 0, borderBottomWidth: 1, paddingLeft: 10}}
          >
            <Text style={{fontWeight: 'bold'}}>Reason</Text>
            <View style={{alignItems: 'center'}}>
              <Picker
                style={{width: '80%', borderWidth: 1}}
                onValueChange={value =>
                  this.setState({selectedSpecialDay: value})
                }
                selectedValue={this.state.selectedSpecialDay}
              >
                <Picker.Item label='Holiday' value='Holiday'/>
                <Picker.Item label='Special Permits' value='Special Permits'/>
                <Picker.Item label='Sickness' value='Sickness'/>
              </Picker>
            </View>
          </View>
          {/*  */}
          <View
            style={{borderTopWidth: 0, borderBottomWidth: 1, paddingLeft: 10}}
          >
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>Token:</Text>
              <Text>0.00 Days</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>Remaning:</Text>
              <Text>44.00 Days</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>Note:</Text>
              {/* <Text>0.00 Days</Text> */}
            </View>
            <TextInput
              multiline={true}
              style={{
                marginTop: 5,
                width: '90%',
                height: 80,
                borderRadius: 10,
                backgroundColor: '#ABC8E2',
                alignSelf: 'center',
                marginBottom: 5
              }}
            />
          </View>
       
        <TouchableOpacity
          onPress={this._onPressButton}
          onShowUnderlay={() => {
            alert('onShowUnderlay button !');
          }}
          style={{
            width: '70%',
            height: 39,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#183152',
            marginVertical: 50,
            alignSelf: 'center',

          }}
        >
          <Text style={{color: 'white'}}>Send Request</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default AbsenceDetail;
