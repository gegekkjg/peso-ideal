import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    alignSelf:'center'
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
  },
  imagem: {
    width: '25%',
    height: '19%',
    justifyContent: 'center',
    alignItens: 'center',
    alignSelf: 'center',
    paddingTop: 50,
  },
  viewInput: {
    flexDirection: 'row',
    backgroundColor: '#044e8f',
    alignItems: 'center',
    width: 120,
  },
});
