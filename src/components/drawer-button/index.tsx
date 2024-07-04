
import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, PressableProps, Text, View } from 'react-native';
import clsx from 'clsx';

type IconNameProps = keyof typeof MaterialIcons.glyphMap;

type DrawerButtonProps = PressableProps & {
  title: string,
  isFocused?: boolean,
  isDivider?: boolean,
  iconName?: IconNameProps,
  notifications?: number[],
}
export function DrawerButton({ ...rest }: DrawerButtonProps) {
  const isDivider = true;
  const isFocused = true;

  return (
    <Pressable className={clsx('p-2 w-full', {
      'border-b ml-10 ': isDivider
    })}
      {...rest}
    >
      <View className={clsx('flex-row items-center gap-4 h-14 px-6 w-full', {
        '-ml-14': isDivider
      })}>
        <MaterialIcons
          name='email'
          size={20}
          color={isFocused ? colors.orange[300] : colors.gray[400]}
        />
        <Text className={clsx('font-subtitle flex-1 text-base', {
          'text-orange-300': isFocused
        })}>
          {rest.title}
        </Text>
        <Text className={clsx('text-gray-400 font-body text-sm', {
          'text-orange-300': isFocused
        })}>
          5
        </Text>
      </View>

    </Pressable>
  )
}