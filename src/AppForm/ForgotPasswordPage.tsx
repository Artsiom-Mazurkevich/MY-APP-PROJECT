import React from 'react';
import {useAppDispatch} from "../redux/store";
import {useForm} from "@mantine/hooks";
import s from "../App.module.css";
import {Anchor, Button, Container, Group, Paper, Text, TextInput, Title} from "@mantine/core";
import {IconArrowLeft} from "@tabler/icons";
import {useNavigate} from "react-router-dom";


type InitialValuesType = {
    email: string
}


export const ForgotPasswordPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const form = useForm<InitialValuesType>({
        initialValues: {
            email: '',
        },
        validationRules: {
            email: (value) => (/^\S+@\S+$/.test(value)),
        },
        errorMessages: {
            email: 'Invalid Email',
        },
    });


    const handleSubmit = (values: InitialValuesType) => {
    }


    return (
        <div className={s.appBackground}>
            <Container size={450} pt={'12%'}>
                <Title
                    align="center"
                    sx={(theme) => ({fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900})}
                >
                    Forgot your password?
                </Title>
                <Text color="dimmed" size="md" align="center" mt={5}>
                    Enter your email address and we will send you further instructions{' '}
                </Text>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                        <TextInput
                            value={form.values.email}
                            {...form.getInputProps('email')}
                            placeholder="Email"
                            required
                        />
                        <Group position="apart" mt="md">
                            <Anchor<'a'>
                                sx={() => ({display: 'flex', flexDirection: 'row', alignItems: 'center'})}
                                weight={500}
                                onClick={(event) => {
                                    event.preventDefault();
                                    navigate('/login')
                                }}
                                href="#"
                                size="sm"
                            >
                                <IconArrowLeft style={{marginRight: '5px'}}/> Try logging in
                            </Anchor>
                        </Group>
                        <Button type={'submit'} fullWidth mt="xl" uppercase>
                            Send Instructions
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

