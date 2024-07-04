import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "./style";

type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
}

export function FloatButton({ icon, ...rest }: FloatButtonProps) {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      style={styles.container}
      {...rest}
    >
      {icon && (
        <MaterialIcons name={icon} size={22} color={colors.orange[500]} />
      )}
      <Text className="font-subtitle text-orange-500">
        Escrever
      </Text>
    </TouchableOpacity>
  )
}

