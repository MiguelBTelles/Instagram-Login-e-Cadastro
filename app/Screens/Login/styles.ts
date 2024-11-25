import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 26,
    },
    inputEmail: {
        width: '100%',
        height: 50,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        fontSize: 16,
        color: '#000',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    inputSenha: {
        width: '100%',
        height: 50,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000',
        borderColor: 'transparent',  
        borderWidth: 1, 
    },
    senhaContainer: {
        width: '100%',
        height: 50,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',  
    },
    eyeIcon: {
        position: 'absolute',
        right: 15,
        top: '50%',
        transform: [{ translateY: -12 }],
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#0095F6',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    btnLoginDesativado: {
        backgroundColor: '#D6E4FF',
        borderColor: '#A8C0FF',
        borderWidth: 1,
    },
    buttonTextDisabled: {
        color: '#FFF'
    },
    instagramLogo: {
        width: '75%',
        height: 120,
        marginBottom: 30,
    },
    textOr: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20
    },
    traços: {
        color: '#BEBEBE'
    },
    or: {
        color: 'gray'
    },
    facebookButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        height: 50,
        backgroundColor: 'transparent',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 16,
    },
    facebookicon: {
        width: 35,
        height: 35,
        marginRight: 5,
    },
    facebookText: {
        color: '#0080ff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    esqueceuSenha: {
        marginTop: 5,
    },
    textEsqueceuSenha: {
        color: '#0080ff',
        fontSize: 16
    },
    containerCadastro: {
        padding: 20,
        borderWidth: 2,
        borderColor: '#BEBEBE',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        width: '100%',
        borderRadius: 4
    },
    cadastroText: {
        color: '#0080ff',
        marginLeft: 8
    },
    
});
