
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, TextInput, Alert } from 'react-native';
import { styles } from './styles';


export default function Cadastro() {
    const navigate = useNavigation()

    const [numeroOuEmail, setNumeroOuEmail] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [nomeDeUsuario, setNomeDeUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastro = () => {
        if (!numeroOuEmail || !nomeCompleto || !nomeDeUsuario || !senha) {
            Alert.alert('Erro', 'Por favor, preencha as informações de login');
        }
    };

    const isButtonDisabled = !numeroOuEmail || !nomeCompleto || !nomeDeUsuario || !senha;

    return (
        <View style={styles.container}>
            <Image
                source={require('./Screens/Login/Assets/Instagram-Logo.png')}
                style={styles.instagramLogo}
            />
            <Text style={styles.cadastroText}>
                Cadastre-se para ver fotos e videos dos seus amigos
            </Text>
            <TouchableOpacity style={styles.EntrarFacebookBtn}>
                <Image
                    source={require('./Screens/Login/Assets/facebook.png')}
                    style={styles.facebookIcon}
                />
                <Text style={styles.facebookbtnText}> Entrar com o Facebook </Text>
            </TouchableOpacity>
            <Text style={styles.textOr}>
                <Text style={styles.traços}>──────────</Text>
                <Text style={styles.or}> OU </Text>
                <Text style={styles.traços}>──────────</Text>
            </Text>
            <View style={styles.inputs}>
                <TextInput
                    style={styles.emailOuNumeroInput}
                    placeholder='Numero do celular ou email'
                    placeholderTextColor='#6B6B6B'
                    value={numeroOuEmail}
                    onChangeText={setNumeroOuEmail}
                />
                <TextInput
                    style={styles.nomeCompletoInput}
                    placeholder='Nome completo'
                    placeholderTextColor='#6B6B6B'
                    value={nomeCompleto}
                    onChangeText={setNomeCompleto}
                />
                <TextInput
                    style={styles.nomeDeUsuarioInput}
                    placeholder='Nome de usuario'
                    placeholderTextColor='#6B6B6B'
                    value={nomeDeUsuario}
                    onChangeText={setNomeDeUsuario}
                />
                <TextInput
                    style={styles.senhaInput}
                    placeholder='Senha'
                    placeholderTextColor='#6B6B6B'
                    value={senha}
                    onChangeText={setSenha}
                />
            </View>
            <TouchableOpacity
                style={[styles.cadastroBtn, isButtonDisabled && styles.cadastroBtnDisabled]}
                disabled={isButtonDisabled}
                onPress={handleCadastro}
            >
                <Text style={[styles.cadastroBtnText, isButtonDisabled && styles.cadastroBtnDisabledText]}>
                    Cadastre-se
                </Text>

            </TouchableOpacity>
            <Text style={styles.TextTermos}>
                Ao cadastrar-se, você concorda com nossos Termos e Política de Privacidade
            </Text>
            <View style={styles.containerLogar}>
                <Text>
                    Tem uma conta?
                </Text>
                <TouchableOpacity style={styles.buttonLogin} onPress={() => {
                    navigate.navigate('index');
                }} >
                    <Text style={styles.loginText}>
                        Conecte-se
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
/*<TouchableOpacity  onPress={()  => {
            navigate.navigate('index')
        }}>
            <Text>
                Esqueceu a senha?
            </Text>
        </TouchableOpacity>
         */