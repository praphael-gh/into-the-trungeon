class SearchSerializer < ActiveModel::Serializer
  attributes :id, :search_name, :search_desc
  belongs_to :encounter
end
