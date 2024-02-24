import { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default AddButton = ({returnToParent}) => {
    const[expand, setExpand] = useState(false); 
    const [title, setTitle] = useState('');
    const [due, setDue] = useState('');


    function handleClick(){
        setExpand(!expand)
    }

    function saveEntry(){
        const data = {
            "title": title,
            "due": due
        }
        returnToParent(data)
        setTitle("")
        setDue("")
        setExpand(false)
    }
    return(
        <View>
<View style={{border: "2px solid", borderRadius:"5px", borderColor: "#e36414",  backgroundColor:"#f7b538"}}s>
            <View onClick={handleClick}><Text style={{textAlign: "center", color: "#e36414"}}>Add+</Text></View>
            {expand && <View>
                <TextInput  style={{ color: "#e36414"}}
        onChangeText={(text) => {
            setTitle(text)
          }}
        value={title}
        placeholder="Enter a title..."
        editable
      />
                <TextInput  style={{ color: "#e36414"}}
        onChangeText={(text) => {
            setDue(text)
          }}
        value={due}
        placeholder="Enter a due date..."
      />
      <View  onClick={saveEntry}><Text style={{textAlign: "center", color: "#e36414"}}>Save</Text></View>
            </View>}
        </View>

<br />
        </View>
        
    )
    
}
  
