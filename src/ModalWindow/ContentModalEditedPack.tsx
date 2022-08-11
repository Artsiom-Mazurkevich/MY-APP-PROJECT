import React from 'react';
import {Button, Checkbox, Group, TextInput} from "@mantine/core";
import {IconCheck} from "@tabler/icons";
import {useForm} from "@mantine/hooks";

export const ContentModalEditedPack = () => {

    const form = useForm({
        initialValues: {
            newTitle: '',
            isPrivate: false
        },
        validationRules: {
            newTitle: (value) => !!value.match('\\S') && value.length > 1 && value.length < 40
        },
        errorMessages: {
            newTitle: 'Title must contain at least 2 and no more than 40 letters'
        }
    })

    const onSubmitHandler = (newTitle: string, isPrivate: boolean) => {

    };

    return (
        <>
            <form onSubmit={form.onSubmit(values => onSubmitHandler(values.newTitle, values.isPrivate))}>
                <TextInput
                    {...form.getInputProps('newTitle')}
                    placeholder={'New Title'}
                    variant={'default'}
                    required
                    label={'Enter a new title to edit a pack'}
                    mb={30}
                />
                <Checkbox {...form.getInputProps('isPrivate')} mb={30} label={'Private Pack'}/>
                <Group align={'end'} position={'right'}>
                    <Button type={'submit'} leftIcon={<IconCheck/>} radius={'xl'} color={'green'}>Add</Button>
                </Group>
            </form>
        </>
    )
};

