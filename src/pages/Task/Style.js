import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  Tasks: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  deleteTask: {
    justifyContent: 'center',
    paddingLeft: 150,
  },
  descriptionText: {
    width: "75%",
    alignContent: 'center',
    backgroundColor: 'f5f5cf',
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color: '#ccc'
  },
  buttonNewTask: {
    height:60,
    width: 60,
    bottom:30,
    left: 20,
    backgroundColor: '#f92e6a',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  iconButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});