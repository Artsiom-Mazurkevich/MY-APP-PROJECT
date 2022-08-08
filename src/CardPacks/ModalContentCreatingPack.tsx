import React from 'react';
import {Button, Checkbox, Group, TextInput} from "@mantine/core";
import {IconCheck} from "@tabler/icons";
import {useForm} from "@mantine/hooks";
import {createPackThunk} from "../redux/cardsPackReducer";
import {useAppDispatch} from "../redux/store";
import {cardsAPI} from "../API/API";

const ModalContentCreatingPack = () => {

    const dispatch = useAppDispatch()

    const form = useForm({
        initialValues: {
            title: '',
            isPrivate: false
        },
        validationRules: {
            title: (value) => !!value.match('\\S') && value.length > 1 && value.length < 40
        },
        errorMessages: {
            title: 'Title must contain at least 2 and no more than 40 letters'
        }
    })


    const onSubmitHandler = (title: string, isPrivate: boolean) => {
        dispatch(createPackThunk(title,isPrivate))
        // createPackThunk(form.values.title, form.values.isPrivate)
    }



    return (
        <form onSubmit={form.onSubmit(values => onSubmitHandler(values.title, values.isPrivate))}>
            <TextInput
                {...form.getInputProps('title')}
                placeholder={'Title Pack'}
                variant={'default'}
                required
                label={'Enter a title to create a pack'}
                mb={30}
            />
            <Checkbox {...form.getInputProps('isPrivate')} mb={30} label={'Private Pack'}/>
            <Group align={'end'} position={'right'}>
                <Button type={'submit'} leftIcon={<IconCheck/>} radius={'xl'} color={'green'}>Add</Button>
            </Group>
        </form>
    );
};

export {ModalContentCreatingPack};