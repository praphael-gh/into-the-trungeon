class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :char_name, :char_desc, :char_class, :char_health, :char_armor, :char_speed, :char_sneak
  has_many :skills
  has_many :items
  has_many :spells
  # belongs_to :user
end
