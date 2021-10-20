import { StyleSheet } from 'react-native'
import config from '../../config/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: config.WHITE,
    borderRadius: 8,
    padding: 24,
    paddingBottom: 70,
  },
  wrapper: {
    padding: 20,
  },
  toolBox: {
    position: 'absolute',
    width: 328,
    height: 88,
    left: 34,
    top: 30,
    backgroundColor: '#FFFFFF',
    elevation: 4,
    borderRadius: 10,
    padding: 20,
  },

  toolBox2: {
    position: 'absolute',
    width: 328,
    height: 88,
    left: 34,
    top: 110,
    backgroundColor: '#FFFFFF',
    elevation: 4,
    borderRadius: 10,
    padding: 20,
},
  toolContent: {
    width: '47%',
    height: '44%',
    marginBottom:20,
    borderRadius:15,
    elevation: 5,
    backgroundColor: config.WHITE,
  },

  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    top:10
  },
  cardBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,

  },
  cardContent: {
    width: '46%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    elevation: 5,
    backgroundColor: config.LIGHT_GREY,
  },
  cardTitle: {
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 16,
    fontWeight: '400',
    fontFamily: 'Open Sans'
  },
  cardSubTitle: {
    fontSize: 16,
    letterSpacing: 0.25,
    lineHeight: 20,
    top:5,
    fontWeight: '400',
    fontFamily: 'Open Sans'
  },
  cardSubTitle1: {
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'Open Sans',
    color: config.WHITE
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  text: {
    fontSize: 27,
    color: config.BLACK,
    fontFamily: 'Poppins',
    alignItems: 'center',
  },
  shortcuts_btn: {
    height: 70, 
    width: 70, 
    backgroundColor: 'rgba(50, 129, 236, 0.1)', 
    borderRadius: 25, 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
  },
  shortcut_btn_text:{
    fontSize:12,
    marginTop:10,
    textAlign:'center',
    color:config.NAVY_BLUE
  },
  cityDetails:{
    color:config.BLACK,
    fontSize:22,
    top:10,right:60
    
  },
  iconBox1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  text1: {
    fontSize: 24,
    color: config.GREY,
    marginLeft: 5,
  },
})