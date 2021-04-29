import ConfigModule from "@/store/config"
export class ImageEntity {
  collection_name: string
  conversions_disk: string
  created_at: string
  custom_properties: any[]
  disk: string
  file_name: string
  generated_conversions: Object
  id: number
  manipulations: any[]
  mime_type: string
  model_id: number
  model_type: string
  name: string
  order_column: number
  responsive_images: any
  size: number
  uuid: string

  get url() {
      return `${ConfigModule.imageBase}/${this.id}/${this.file_name}`
  }
}
