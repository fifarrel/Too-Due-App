import {Text, View, StyleSheet} from 'react-native';
import { useState } from 'react';
const ListItem = ({data}) => {

    const [completed, setCompleted] = useState(false);
    const getBorderColor =()=>{
        return completed? "#80B918" : "#8C1C13";
    }
    const getBGColor = ()=>{
        return completed? "#AACC00" : "#BF4342";
    }
    const urgency = ()=>{
        return completed? "normal" : "Bold";
    }
    const strikeThrough = ()=>{
        return completed? "line-through" : "none";
    }
    const handleClick = ()=>{
        setCompleted(!completed)
    }

    return (<View><View style={[styles.listItem, {borderColor: getBorderColor(), backgroundColor: getBGColor()}]} onClick = {handleClick}>            
    <Text style={{textDecorationLine: strikeThrough(), fontWeight: urgency()}}>{data.title}</Text>
    <Text style={{textDecorationLine: strikeThrough(), fontWeight: urgency()}}>{data.due}</Text>
    </View>
    <br />
    </View>
        
      );
      
}

const styles = StyleSheet.create({
    listItem: {
          border: "2px solid",
          borderRadius: "3px",
   width: "200px"
        },
      });


export default ListItem;
