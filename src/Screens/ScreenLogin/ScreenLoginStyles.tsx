import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#a0aec0',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  button: {
    width: '100%',
    marginVertical: 12,
    paddingVertical: 12,
     borderRadius: 8,
      // backgroundColor: '#3182ce',
    //  justifyContent: 'center',
    //  shadowColor: '#000',
    //  shadowOffset: { width: 0, height: 2 },
    //  shadowOpacity: 0.2,
    //  shadowRadius: 2,
    //  elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#e53e3e',
    fontSize: 14,
    marginTop: -4,
    marginBottom: 8,
    textAlign: 'left',
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2d3748',
  },
});
