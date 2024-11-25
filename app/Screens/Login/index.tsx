import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from 'expo-router';

export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaVisivel, setSenhaVisivel] = useState(false);

    const toggleSenhaVisivel = () => {
        setSenhaVisivel(!senhaVisivel);
    };

    const navigate = useNavigation();

    const handleLogin = () => {
        if (!email || !senha) {
            Alert.alert('Erro', 'Por favor, preencha as informações de login');
        }
    };

    const isButtonDisabled = !email || !senha;

    return (
        <View style={styles.container}>
            <Image
                source={require('./Assets/Instagram-Logo.png')}
                style={styles.instagramLogo}
            />
            <TextInput
                style={styles.inputEmail}
                placeholder="Email"
                placeholderTextColor="#6B6B6B"
                value={email}
                onChangeText={setEmail}
            />
            <View style={styles.senhaContainer}>
                <TextInput
                    style={styles.inputSenha}
                    placeholder="Senha"
                    placeholderTextColor="#6B6B6B"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={!senhaVisivel}
                />
                <TouchableOpacity onPress={toggleSenhaVisivel} style={styles.eyeIcon}>
                    <AntDesign
                        name={senhaVisivel ? "eyeo" : "eye"}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={[styles.loginButton, isButtonDisabled && styles.btnLoginDesativado]}
                disabled={isButtonDisabled}
                onPress={handleLogin}
            >
                <Text style={[styles.loginButtonText, isButtonDisabled && styles.buttonTextDisabled]}>
                    Entrar
                </Text>
            </TouchableOpacity>
            <Text style={styles.textOr}>
                <Text style={styles.traços}>───────────</Text>
                <Text style={styles.or}> OU </Text>
                <Text style={styles.traços}>───────────</Text>
            </Text>
            <TouchableOpacity style={styles.facebookButton}>
                <Image
                    source={require('./Assets/facebook-logo-facebook-icon-transparent-free-png.webp')}
                    style={styles.facebookicon}
                />
                <Text style={styles.facebookText}>Entrar com o Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.esqueceuSenha}>
                <Text style={styles.textEsqueceuSenha}>
                    Esqueceu a senha?
                </Text>
            </TouchableOpacity>
            <View style={styles.containerCadastro}>
                <Text>
                    Não tem uma conta?
                </Text>
                <TouchableOpacity style={styles.buttonCadastro} onPress={() => {
                    navigate.navigate('cadastro');
                }} >
                    <Text style={styles.cadastroText}>
                        Cadastre-se
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
