ALTER TABLE [dbo].[OrderProducts] DROP CONSTRAINT [FK__OrderProd__Produ__06CD04F7]
GO
ALTER TABLE [dbo].[OrderProducts] DROP CONSTRAINT [FK__OrderProd__Order__05D8E0BE]
GO
ALTER TABLE [dbo].[Orders] DROP CONSTRAINT [DF__Orders__OrderDat__02FC7413]
GO
/****** Object:  Index [UQ__product__72E12F1BDAE8B01E]    Script Date: 07.08.2024 00:03:35 ******/
ALTER TABLE [dbo].[product] DROP CONSTRAINT [UQ__product__72E12F1BDAE8B01E]
GO
/****** Object:  Table [dbo].[sales]    Script Date: 07.08.2024 00:03:35 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sales]') AND type in (N'U'))
DROP TABLE [dbo].[sales]
GO
/****** Object:  Table [dbo].[product]    Script Date: 07.08.2024 00:03:35 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[product]') AND type in (N'U'))
DROP TABLE [dbo].[product]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 07.08.2024 00:03:35 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Orders]') AND type in (N'U'))
DROP TABLE [dbo].[Orders]
GO
/****** Object:  Table [dbo].[OrderProducts]    Script Date: 07.08.2024 00:03:35 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[OrderProducts]') AND type in (N'U'))
DROP TABLE [dbo].[OrderProducts]
GO
/****** Object:  Table [dbo].[OrderProducts]    Script Date: 07.08.2024 00:03:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderProducts](
	[OrderProductID] [int] IDENTITY(1,1) NOT NULL,
	[OrderID] [int] NOT NULL,
	[ProductID] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[OrderProductID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 07.08.2024 00:03:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[OrderID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NOT NULL,
	[Email] [nvarchar](100) NOT NULL,
	[Address] [nvarchar](255) NOT NULL,
	[Address2] [nvarchar](255) NULL,
	[Country] [nvarchar](50) NOT NULL,
	[City] [nvarchar](50) NOT NULL,
	[Zip] [nvarchar](20) NOT NULL,
	[PaymentMethod] [nvarchar](50) NOT NULL,
	[Amount] [decimal](10, 2) NOT NULL,
	[OrderDate] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[OrderID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[product]    Script Date: 07.08.2024 00:03:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](120) NOT NULL,
	[description] [varchar](500) NULL,
	[price] [decimal](10, 2) NOT NULL,
	[stock] [int] NOT NULL,
	[ImageURL] [nvarchar](max) NULL,
	[category] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[product] ON 

INSERT [dbo].[product] ([id], [name], [description], [price], [stock], [ImageURL], [category]) VALUES (1, N'VASAGLE 3 Tier Bookcase Shelving Unit', N'[VINTAGE FLAIR & INDUSTRIAL CHARME] The colour mix of camel brown and ink black creates a vintage flair and industrial charm that make this standing shelf a chic addition to your home', CAST(6999.00 AS Decimal(10, 2)), 10, N'https://webshopimagestore.blob.core.windows.net/product-images/Product1-image1.png', N'Rack')
INSERT [dbo].[product] ([id], [name], [description], [price], [stock], [ImageURL], [category]) VALUES (2, N'Wooden Floor Lamp with Shelf', N'3 colour temperatures LED E27 bulb included: the shelf lamp comes with a 3000 K/4000 K/5000 K LED lamp, which can provide a service life of 30,000 hours, so you do not need to buy an additional bulb. You can switch different colour temperatures according to different scenes. The LED lamp saves 90% on electricity bills per year than normal incandescent bulbs. ', CAST(5600.00 AS Decimal(10, 2)), 10, N'https://webshopimagestore.blob.core.windows.net/product-images/Product2-image1.png', N'Shelf')
INSERT [dbo].[product] ([id], [name], [description], [price], [stock], [ImageURL], [category]) VALUES (3, N'COMHOMA Recliner Chair, Floor Sofa, Foldable Floor Chair with Sleep Function', N'Description f6 levels adjustable backrest: this floor chair has an adjustable backrest that can be fixed at 6 angles from 105° to 180°, which provides a versatile option to support your daily activities and meets your need such as watching TV or cuddling. It can be used as a comfortable seat for various activities such as reading, relaxing or playing.or product 3', CAST(14900.00 AS Decimal(10, 2)), 10, N'https://webshopimagestore.blob.core.windows.net/product-images/Product3-image1.png', N'Chair')
INSERT [dbo].[product] ([id], [name], [description], [price], [stock], [ImageURL], [category]) VALUES (4, N'Relaxdays Square Side Table', N'Decorative: the side table in a trendy industrial design is an eye-catcher - vintage flair for home', CAST(4900.00 AS Decimal(10, 2)), 10, N'https://webshopimagestore.blob.core.windows.net/product-images/Product4-image1.png', N'Table')
INSERT [dbo].[product] ([id], [name], [description], [price], [stock], [ImageURL], [category]) VALUES (5, N'Yaheetech Dining Set in Country House Style', N'Country Style - The wood grain and metal frame together with the curved lines form this country style set. The timeless table and chairs are suitable for different living styles.', CAST(100.00 AS Decimal(10, 2)), 10, N'https://webshopimagestore.blob.core.windows.net/product-images/Product5-image1.png', N'Table')
INSERT [dbo].[product] ([id], [name], [description], [price], [stock], [ImageURL], [category]) VALUES (6, N'HOOBRO EBF022SF01 Side Table with Charging Station', N'Upgraded Charging Station This side table has 2 AC outlets, 2 USB ports and a 59 inch extension cable, which allows you to charge your phone, tablet, desk lamp and game console at the same time. In addition, the distance between each socket and each port prevents adapters from blocking each other', CAST(150.00 AS Decimal(10, 2)), 10, N'https://webshopimagestore.blob.core.windows.net/product-images/Product6-image1.png', N'Table')
INSERT [dbo].[product] ([id], [name], [description], [price], [stock], [ImageURL], [category]) VALUES (7, N'SONGMICS LSF014B11 Bench', N'Stylish and stable: This bench is made of stylish faux linen and is finely stitched. The corners with metal cover create a sturdy overall structure that gives the bench a high load capacity of 300 kg.', CAST(220.00 AS Decimal(10, 2)), 10, N'https://webshopimagestore.blob.core.windows.net/product-images/Product7-image1.png', N'Bench')
INSERT [dbo].[product] ([id], [name], [description], [price], [stock], [ImageURL], [category]) VALUES (8, N'SONGMICS Office Chair', N'The most important thing about a chair? Of course, comfort! The backrest and seat of this office chair are therefore well padded and the soft cover made of breathable imitation linen provides extra comfort. You can also adjust the seat height and relieve your arms and shoulders on the practical armrests.', CAST(89.00 AS Decimal(10, 2)), 10, N'https://webshopimagestore.blob.core.windows.net/product-images/Product8-image1.png', N'Chair')
INSERT [dbo].[product] ([id], [name], [description], [price], [stock], [ImageURL], [category]) VALUES (9, N'VASAGLE Kitchen Shelf', N'Create order: Order in the kitchen is important. Equipped with multiple shelves for cans and plates, 2 x 9 cm deep grid baskets for fruit and 6 hooks for cooking utensils, this rack perfectly supports you in preparing your delicacies.', CAST(198.00 AS Decimal(10, 2)), 10, N'https://webshopimagestore.blob.core.windows.net/product-images/Product9-image1.png', N'Shelf')
INSERT [dbo].[product] ([id], [name], [description], [price], [stock], [ImageURL], [category]) VALUES (10, N'YITAHOME Chest of Drawers', N'Quality construction – YITAHOME chest of drawers with 8 folding drawers, is even suitable for rented apartment; made of reliable metal frame and durable MDF wooden board, more durable and beautiful than plastic cabinets; by simply pulling the fabric handles, the drawers can be easily opened and closed; 4 adjustable plastic feet protect your floor from scratches.', CAST(188.00 AS Decimal(10, 2)), 10, N'https://webshopimagestore.blob.core.windows.net/product-images/Product10-image1.png', N'Drawer')
SET IDENTITY_INSERT [dbo].[product] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__product__72E12F1BDAE8B01E]    Script Date: 07.08.2024 00:03:35 ******/
ALTER TABLE [dbo].[product] ADD UNIQUE NONCLUSTERED 
(
	[name] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT (getdate()) FOR [OrderDate]
GO
ALTER TABLE [dbo].[OrderProducts]  WITH CHECK ADD FOREIGN KEY([OrderID])
REFERENCES [dbo].[Orders] ([OrderID])
GO
ALTER TABLE [dbo].[OrderProducts]  WITH CHECK ADD FOREIGN KEY([ProductID])
REFERENCES [dbo].[product] ([id])
GO
