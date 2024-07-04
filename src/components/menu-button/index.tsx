import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { useStatusDrawer } from "@/hooks/useStatusDrawer";

export function MenuButton() {
  const { onSetStatus, status } = useStatusDrawer();

  return (
    <Pressable onPress={() => onSetStatus("open")}>
      <MaterialIcons name="menu" size={22} color={colors.white} />
    </Pressable>
  )
}