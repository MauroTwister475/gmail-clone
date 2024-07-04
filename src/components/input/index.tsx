import { colors } from '@/styles/colors'
import { ReactNode } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'

interface InputProps {
  children: ReactNode
}
function Input({ children }: InputProps) {
  return (
    <View className='w-full h-14 rounded-lg p-4 gap-4 items-center flex-row bg-gray-800'>
      {children}
    </View>
  ) 
}

interface InputFieldProps extends TextInputProps {

}
function InputField({...rest }: InputFieldProps) {
  return (
    <TextInput 
      className='flex-1 font-normal text-base text-white' 
      placeholderTextColor={colors.gray[400]}
      {...rest} 
    />
  )
}

Input.field = InputField;

export { Input };