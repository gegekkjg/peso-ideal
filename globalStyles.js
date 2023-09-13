import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItens: 'center',
    alignSelf:'center',
    marginTop:20
  },
 
  title: {
    
    fontWeight: "bold",
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 35,
    color: '#fff',
  },
  texto: {
    textAlign: 'justify',
    fontSize: 15,
    color: '#fff',
    opacity: 1
  },
  viewInput: {
    flexDirection: 'row',
    backgroundColor: '#044e8f',
    alignItems: 'center',
    width: 120,
  },
  image: {
    flex: 1,
    // justifyContent: 'center',

  },
  vidro:{
    backgroundColor:"rgba(0, 0, 0, 0.200)",
   
  }
});
