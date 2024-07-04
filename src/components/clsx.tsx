import { Text, View, Pressable, PressableProps } from "react-native"
import { clsx } from "clsx"

type CategoryProps = PressableProps & {
  title: string,
  isSelected?: boolean,
}

export function ListTransactions({ isSelected, title, ...rest }: CategoryProps) {
  return (
    <Pressable
      className={clsx('bg-slate-800 px-4 justify-center rounded-md h-10', isSelected && "border-2 border-lime-300")}
      {...rest}
    >
      <Text className="text-slate-100 font-subtitle text-sm">
        {title}
      </Text>
    </Pressable>
  )
}

// o Pressable é um componente para toques, so que nao tem o efeito de opacidade 