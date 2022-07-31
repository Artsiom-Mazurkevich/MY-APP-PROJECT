import React from 'react';
import {useAppDispatch} from "../redux/store";
import {useForm} from "@mantine/hooks";
import s from "../App.module.css";
import {Anchor, Button, Container, Group, Paper, PasswordInput, Text, TextInput, Title} from "@mantine/core";
import {registerTC} from "../redux/registerReducer";
import {IconArrowBackUp} from "@tabler/icons";
import {useNavigate} from "react-router-dom";


type InitialValuesType = {
    email: string
    password: string
    confirmPassword: any
}


export const RegistrationPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const form = useForm<InitialValuesType>({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationRules: {
            email: (value: string) => (/^\S+@\S+$/.test(value)),
            password: (value: string) => value.length > 8,
            confirmPassword: (value, values) => value === values?.password
        },
        errorMessages: {
            email: 'Invalid Email',
            password: 'Password must contain at least 8 symbols',
            confirmPassword: 'Wrong password',
        },
    });


    const handleSubmit = (values: InitialValuesType) => {
        dispatch(registerTC(values.email, values.password))
    }


    return (
        <div className={s.appBackground}>
            <Container size={450} pt={'12%'}>
                <Title
                    align="center"
                    sx={(theme) => ({fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900})}
                >
                    Sign Up
                </Title>
                <Text color="dimmed" size="md" align="center" mt={5}>
                    Сreating a new account{' '}
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
                        <PasswordInput
                            value={form.values.confirmPassword}
                            {...form.getInputProps('confirmPassword')}
                            placeholder="Confirm Password"
                            required
                            mt="md"
                        />
                        <Group position="apart" mt="md">
                            <Anchor<'a'>
                                sx={() => ({display: 'flex', flexDirection: 'row', alignItems: 'center'})}
                                weight={500}
                                onClick={(event) => {event.preventDefault(); navigate('/login')}}
                                href="#"
                                size="sm"
                            >
                                <IconArrowBackUp style={{marginRight: '5px', paddingTop: '3px'}}/>
                                Back to Sign In
                            </Anchor>
                        </Group>
                        <Button type={'submit'} fullWidth mt="xl" uppercase>
                            Sign up
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

