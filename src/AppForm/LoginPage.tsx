import React, {useEffect} from 'react';
import {Anchor, Button, Checkbox, Container, Group, Paper, PasswordInput, TextInput, Title, Text} from "@mantine/core";
import s from '../App.module.css';
import {useForm} from "@mantine/hooks";
import {loginTC} from "../redux/loginReducer";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {useNavigate} from "react-router-dom";

type InitialValuesType = {
    email: string
    password: string
    rememberMe: boolean
}


export const LoginPage = () => {
    const isLoggedIn = useAppSelector(state => state.login._id)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const form = useForm<InitialValuesType>({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validationRules: {
            email: (value) => (/^\S+@\S+$/.test(value)),
            password: (value) => value.length > 8,
        },
        errorMessages: {
            email: 'Invalid Email',
            password: 'Password must contain at least 8 symbols',
        },
    });


    const handleSubmit = (values: InitialValuesType) => {
        dispatch(loginTC(values.email, values.password, values.rememberMe))
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/')
        }
    }, [isLoggedIn])


    return (
        <div className={s.appBackground}>
            <Container size={450} pt={'12%'}>
                <Title
                    align="center"
                    sx={(theme) => ({fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900})}
                >
                    Sign In
                </Title>
                <Text color="dimmed" size="md" align="center" mt={5}>
                    Do not have an account yet?{' '}
                    <Anchor<'a'> href="#" size="md" onClick={(event) => {event.preventDefault(); navigate('/registration')}}>
                        Create account
                    </Anchor>
                </Text>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                        <TextInput
                            value={form.values.email}
                            {...form.getInputProps('email')}
                            placeholder="Email"
                            required
                        />
                        <PasswordInput
                            value={form.values.password}
                            {...form.getInputProps('password')}
                            placeholder="Password"
                            required
                            mt="md"
                        />
                        <Group position="apart" mt="md">
                            <Checkbox
                                checked={form.values.rememberMe}
                                {...form.getInputProps('rememberMe')}
                                label="Remember me"
                            />
                            <Anchor<'a'> onClick={(event) => {event.preventDefault(); navigate('/password-recovery')}} href="#" size="sm">
                                Forgot password?
                            </Anchor>
                        </Group>
                        <Button type={'submit'} fullWidth mt="xl" uppercase>
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

