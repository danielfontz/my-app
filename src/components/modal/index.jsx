// namespace import
import * as DM from "./style"
import { useNavigation } from "@react-navigation/native"
import { FontAwesome6 } from "@expo/vector-icons"

const DetailsModal = () => {
    const navigation = useNavigation()
    return (
        <DM.Overlay onPress={() => navigation.goBack()}>
            <DM.Container>
                <DM.Title>Title</DM.Title>
                <DM.Description>DMescription</DM.Description>
                <DM.CloseBtn onPress={() => navigation.goBack()}>
                    <FontAwesome6 name="xmark">
                    </FontAwesome6>
                </DM.CloseBtn>
            </DM.Container>
        </DM.Overlay>
    )
}
export default DetailsModal