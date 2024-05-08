import discord
from discord.ext import commands
from discord import app_commands
permissoes = discord.Intents.default()
permissoes.message_content = True
permissoes.members = True
bot = commands.Bot(command_prefix=".", intents=permissoes)


@bot.event
async def on_member_join(member):
    canal = bot.get_channel(1237180752995553391)

    meu_embed = discord.Embed(
        title=f'Bem-vindo {member.name}',
        description="Olá convertidos espero que aproveitem nosso servidor",
        color=discord.Color.red()
    )
    meu_embed.set_thumbnail(url=member.avatar)
    meu_embed.set_author(name='ECLIPSE')

    botao = discord.ui.Button(label="instagram", url='https://www.instagram.com/arquivos_de_lilith/')
    youtube = discord.ui.Button(label="youtube", url='https://www.youtube.com/@ArquivosdeLilith/featured')
    tikTok = discord.ui.Button(label="tiktok", url='https://www.tiktok.com/@arquivos_de_lilit')

    view = discord.ui.View()
    view.add_item(botao)
    view.add_item(youtube)
    view.add_item(tikTok)

    await canal.send(embed=meu_embed, view=view)

    texto = "Respeito Mútuo: Trate todos os membros com cortesia e respeito. Comunicação ofensiva, discriminatória ou prejudicial não será tolerada.\n\nConduta Apropriada: Evite comportamentos ofensivos, provocativos ou intimidadores. Respeite as opiniões e os limites dos outros.\n\nSem Spam: Não faça spam nos canais de conversa. Isso inclui memes excessivos, imagens não solicitadas ou conteúdo de baixa qualidade.\n\nIdentificação Adequada: Use um nome de usuário reconhecível. Nomes ofensivos ou inadequados não são permitidos.\n\nCanais Específicos: Use os canais designados para tópicos específicos para manter a organização.\n\nRegras do Problema: Reporte qualquer comportamento inadequado aos moderadores para lidar com a situação de forma justa e imparcial."


    embed = discord.Embed(
        title=f'Olá {member.name}, bem-vindo ao servidor!',
        description="espero que você aproveite nosso server estamos e que mantenha um hanbiente agradavel para todos!!",
        color=discord.Color.red()
    )
    embed.add_field(name="regras:", value=texto, inline=False)

    await member.send(embed=embed)
@bot.event
async def on_ready():       
    print("estou pronto")

bot.run("MTIzNjgyNjE3NzU4NzY0NjU3NQ.GqDl70.AfBZLIIqArDFGBtZ4W9z1URBUZX6ZgBVIC9vnk")
