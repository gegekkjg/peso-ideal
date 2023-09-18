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
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    width: 120,
    textAlign: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    // justifyContent: 'center',

  },
  textoSimples:{
    color: "#fff",
    fontSize: 15,
    paddingTop:15,
  },
  input:{
    width:"100%",
    paddingLeft: 5,
    color: "#fff",
    fontWeight: "bold",
  },
  botao:{
    width: '50%', 
    backgroundColor: "#298DC7",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical:10,
    alignItems: "center",
    justifyContent: 'center',
  },
  botao2:{
    width: '50%', 
    backgroundColor: "#ff69b4",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical:10,
    alignItems: "center",
    justifyContent: 'center',
  },
  mulher:{
    color: "black",
    paddingLeft: 4,
    fontWeight: "bold",
  },
  homem:{
    color: "black",
    paddingRight: 4,
    fontWeight: "bold",
  },
  center:{
    textAlign:'center',
    alignItems: 'center'
  }
});
