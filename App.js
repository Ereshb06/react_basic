import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, } from 'react-native';
import Header from './components/headers';
import TodoItem from './components/tudoitems'; 
import Tudoadd from './components/tudo_add'

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'I am learning react', key: '1'},
    { text: 'I am learning python', key: '2'},
    { text: 'I am learning C++', key: '3'},
  ]);

  const  pressHandler= (key) =>
  {
    setTodos((prevTodos)=>
    {
      return prevTodos.filter( tudo=> tudo.key !=key)
    }
    )
  }

  // const submitHandler=(text)=>{
  //   setTodos((prevTodos)=>
  //   {
  //     return [{text:text , key : Math.random().toString()},
  //     ...prevtodu
  //   ]})

  // }


  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos,
      ];
    });
  };


  return (
    <View style={styles.container}>
      <Header />
      <Tudoadd submitHandler={submitHandler}/>

      <View style={styles.content}>
        <View style={styles.middle}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item}  pressHandler={pressHandler} /> 
            )}
          />
        </View>
      </View>
      <Text> </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
  middle: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
});
