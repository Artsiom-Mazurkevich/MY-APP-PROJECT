import React, {useState} from 'react';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button, LoadingOverlay
} from '@mantine/core';
import {useForm} from "@mantine/hooks";
import {useAppDispatch} from "../redux/store";
import {loginTC} from "../redux/loginReducer";
import {registerTC} from "../redux/registerReducer";
import {useNavigate} from "react-router-dom";


interface IForm {
    type: 'LOGIN' | 'REGISTER' | 'FORGOT'
}

type InitialValuesType = {
    email: string
    password: string
    rememberMe: boolean
}


export const AppForm = React.memo( function (props: IForm) {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [visible, setVisible] = useState(false);

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
        setVisible((v) => !v)
        if (props.type === 'LOGIN') {
            dispatch(loginTC(values.email, values.password, values.rememberMe))
        }
        if (props.type === 'REGISTER') {
            dispatch(registerTC(values.email, values.password))
        }
        // if (props.type === 'FORGOT') {
        //
        // }
    }


    return (
        <Container
            style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: "80%"}}
            size={420}
        >
            <LoadingOverlay visible={visible} />
            <Title
                align="center"
                sx={(theme) => ({fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900})}
            >
                {props.type === 'LOGIN' && 'Login'}
                {props.type === 'FORGOT' && 'Recovery Password'}
                {props.type === 'REGISTER' && 'Register'}
            </Title>
            <Text size="sm" align="center" mt={5}>
                {props.type === 'LOGIN' && 'Do not have an account yet?'}
                {props.type === 'FORGOT' && 'Enter your Email'}
                {props.type === 'REGISTER' && ''}{' '}
                <Anchor<'a'> href="#" size="sm" onClick={(event) => {event.preventDefault(); navigate('/register')}}>
                    {props.type === 'LOGIN' && 'Create account'}
                    {props.type === 'FORGOT' && ''}
                    {props.type === 'REGISTER' && ''}
                </Anchor>
            </Text>

            <Paper
                withBorder
                shadow="md"
                p={30}
                mt={30}
                radius="md"
            >
                <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                    <TextInput
                        value={form.values.email}
                        {...form.getInputProps('email')}
                        placeholder="Email"
                        required
                    />
                    {props.type !== 'FORGOT' && <PasswordInput
                        value={form.values.password}
                        {...form.getInputProps('password')}
                        placeholder="password"
                        required
                        mt="md"
                    />
                    }
                    <Group position="apart" mt="md">
                        {props.type !== 'REGISTER' && props.type !== 'FORGOT' && <Checkbox
                            checked={form.values.rememberMe}
                            {...form.getInputProps('rememberMe')}
                            label="Remember me"
                        />
                        }
                        {props.type === 'LOGIN' &&
                            <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
                                Forgot password?
                            </Anchor>
                        }
                    </Group>
                    <Button fullWidth mt="xl" type={'submit'}>
                        {props.type === 'LOGIN' && 'Sign in'}
                        {props.type === 'FORGOT' && 'Recovery Password'}
                        {props.type === 'REGISTER' && 'Create Account'}
                    </Button>
                </form>
            </Paper>
        </Container>
    );
})