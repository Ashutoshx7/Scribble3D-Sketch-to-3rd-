export function blobToBase64(blob: Blob): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onloadend = () => {
			const result = reader.result as string
			if (!result) {
				reject(new Error('Failed to read blob'))
				return
			}
			const parts = result.split(',')
			if (parts.length > 1 && parts[1]) {
				resolve(parts[1])
			} else {
				reject(new Error('Failed to extract base64 content'))
			}
		}
		reader.onerror = () => reject(new Error('FileReader error'))
		reader.readAsDataURL(blob)
	})
}
