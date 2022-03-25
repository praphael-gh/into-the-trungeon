class EncounterSerializer < ActiveModel::Serializer
  attributes :id, :encounter_name, :encounter_desc, :encounter_class
  has_many :enemies
  has_many :traps
  has_many :conversations
  has_many :searches
end
