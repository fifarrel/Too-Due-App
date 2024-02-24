import { StyleSheet, Text, View } from 'react-native';
import AddButton from './AddButton';
import { useState } from 'react';
import ListItem from './ListItems';

export default function App() {

 
  const [list, setList] = useState([]);

  const addToList = (data)=>{
    const newList = list.concat(data);

    setList(newList);
  }
 

  return (
  <View style={styles.container}>
    <Text style={{fontSize: 32, fontFamily: "Arial", letterSpacing: 2, color:"#f7b538"  }}>Too Due</Text>

    <AddButton returnToParent={addToList} />
    
    {list && list.length>0 && list.map((item, index) => (
          <ListItem key={index} data={item}/>
          
        ))}
  </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192BC2',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});


