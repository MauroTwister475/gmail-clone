import { FlatList, View, Text } from "react-native"
import { Input } from "@/components/input"
import { MenuButton } from "@/components/menu-button"
import { Avatar } from "@/components/avatar"
import { colors } from "@/styles/colors"
import { Email } from "@/components/emails"
import { EMAILS } from "@/utils/emails"
import { FloatButton } from "@/components/float-button"

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4">
      <Input>
        <MenuButton />
        <Input.field placeholder="Pesquisar no e-mail" cursorColor={colors.blue[600]} />
        <Avatar
          source={{ uri: "https://github.com/maurotwister475.png" }}
          size="small"
        />
      </Input>
      <FlatList
        data={EMAILS}
        renderItem={({ item }) => <Email data={item} />}
        keyExtractor={(item) => item.id}
        contentContainerClassName="gap-1"
        ListHeaderComponent={() => (
          <Text className="text-md uppercase text-gray-400 font-subtitle mt-6">Entradas</Text>
        )}
        ListEmptyComponent={() => (
          <View className="py-48 w-full items-center justify-center">
            <Text className="text-md text-gray-500 font">
              Caixa de entrada vazia...
            </Text>
          </View>
        )}
      />
      <FloatButton icon="edit" />
    </View>
  )
}