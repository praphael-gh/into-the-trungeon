class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :item_desc, :item_class, :character_id, :search_id
end
