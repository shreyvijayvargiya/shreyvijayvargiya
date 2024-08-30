import EmojiPicker from "emoji-picker-react";


const EmojiPickerComponent = () => {
	return (
		<div className="h-screen w-full flex justify-center items-center">
			<EmojiPicker height={500} width={400} />
		</div>
	);
}
export default EmojiPickerComponent